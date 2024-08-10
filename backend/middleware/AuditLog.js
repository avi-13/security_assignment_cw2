const AuditLog = require('./models/AuditLog');

const auditTrailMiddleware = (action) => {
  return async (req, res, next) => {
    const user = req.user; 
    const collection = req.baseUrl.split('/')[1]; 
    const documentId = req.params.id;

    let previousData = null;
    if (action === 'UPDATE' || action === 'DELETE') {
      previousData = await mongoose.model(collection).findById(documentId);
    }

    const newAuditLog = new AuditLog({
      user: user._id,
      action,
      collection,
      documentId,
      previousData,
      newData: req.body, 
    });

    await newAuditLog.save();

    next();
  };
};

app.post('/users', auditTrailMiddleware('CREATE'), userController.createUser);
app.put('/users/:id', auditTrailMiddleware('UPDATE'), userController.updateUser);
app.delete('/users/:id', auditTrailMiddleware('DELETE'), userController.deleteUser);

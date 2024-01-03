export default function AddBloodBanks() {
  return (
    <>
      <form>
        <h2 class="mb-4">Blood Bank Registration</h2>
        <div class="form-group">
          <label for="bloodBankName">Blood Bank Name:</label>
          <input type="text" class="form-control" id="bloodBankName" name="bloodBankName" required />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="address">Address:</label>
            <input type="text" class="form-control" id="address" name="address" required />
          </div>
          <div class="form-group col-md-6">
            <label for="city">City:</label>
            <input type="text" class="form-control" id="city" name="city" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="province">Province:</label>
            <input type="text" class="form-control" id="province" name="province" required />
          </div>
          <div class="form-group col-md-6">
            <label for="postalCode">Postal Code:</label>
            <input type="text" class="form-control" id="postalCode" name="postalCode" required />
          </div>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" class="form-control" id="phone" name="phone" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" class="form-control" id="email" name="email" required />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </>
  );
}
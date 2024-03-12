const Complaint = () => {
  return (
    <>
      <div class="container mt-5 text-center">
        <h1>Complaint Form</h1>
      </div>
      <div class="container mt-5">
        <form class="row g-3 needs-validation">
          <select
            class="form-select"
            aria-label="Default select example"
            name="Branch"
          >
            <option value="" selected>
              Select Department
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Artifical Intelligence">
              Artifical Intelligence
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electronic & Communication">
              Electronic & Communication
            </option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Food Processing and Technology">
              Food Processing and Technology
            </option>
            <option value="Automobile Engineering">
              Automobile Engineering
            </option>
          </select>

          <select
            class="form-select"
            aria-label="Default select example"
            name="Query"
            onchange="yesnoCheck(this);"
          >
            <option value="" selected>
              Select Query
            </option>
            <option value="Computer">Computer</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Carpentering">Carpentering</option>
            <option value="Electrical">Electrical</option>
            <option value="Civil Work">Civil Work</option>
            <option value="OtherQuery">Other</option>
          </select>
          <div id="ifYes">
            <label for="other">Enter Other Query</label>
            <input type="text" name="OtherQuery" />
          </div>
          <div id="ifY">
            <label for="computer">Computer No</label>
            <input type="text" name="Computer" />
          </div>

          <label for="floatingTextarea2">Note</label>
          <div class="form-floating">
            <textarea
              class="form-control"
              id="floatingTextarea2"
              name="Note"
            ></textarea>
          </div>

          <div class="col-12">
            <button class="btn btn-primary m-1" type="submit" name="button">
              Submit
            </button>
            <button class="btn btn-danger m-1" type="rest" name="button">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Complaint;

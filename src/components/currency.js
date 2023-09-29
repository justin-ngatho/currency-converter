export default function Converter() {

    return (
      <div className="converter">
        <div className="container-converter">
          <div className="row">
            <label for="exampleDataList" className="form-label">
              Datalist example
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
          </div>
          <div className="row">
            <p className="neutral"> TO</p>
          </div>
          <div className="row">
            <label for="exampleDataList" className="form-label">
              Datalist example
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-dark" type="button">
            Convert
          </button>

        </div>
      </div>
    );
}
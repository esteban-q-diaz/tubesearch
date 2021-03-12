var Search = ({ handleSearch }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => { handleSearch(e.target.value); console.log(e.target.value); }}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;

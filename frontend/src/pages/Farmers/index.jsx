import React, { useContext, useState } from "react";
import Card2 from "../../components/Card2";
import { Link } from "react-router-dom";
import UsersContext from "../../contexts/Users/UsersContext";
// import SearchLists from "./SearchLists";

function index() {
  const { Search, jsonRes } = useContext(UsersContext);
  const [form, setForm] = useState("");
  const OnChange = (e) => {
    setForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    Search(form);
  };
  let file = jsonRes.lands;
  // console.log('json response is ',jsonRes)
  return (
    <>
      <div className="container-fluid m-0 p-0 text-bg-secondary d-flex align-items-center justify-content-center">
        <Link to="/farmers" className="mx-2 text-light fs-4">
          Home
        </Link>
      </div>

      <div className="container my-2 mx-2 " >
        <form
          className="d-flex"
          role="search"
          method="get"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Finding the context what you want!"
            aria-label="Search"
            value={form}
            onChange={(e) => OnChange(e)}
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* See all the lists of the machinaries we have  */}
      <div className="container my-2" style={{minHeight : "80vh"}}>
        <div className="row">
          {!file
            ? "NO result found, You can search here"
            : file.map((ele) => {
                {/* <Card2
                  title={ele.title}
                  description={ele.description}
                  img={ele.img}
                />; */}
                <div className="card mx-2 my-2" style={{ width: "18rem;" }}>
                {/* <img src={img} className="card-img-top" alt={title} /> */}
                <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.description}.</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <img src="/img/update.png" alt="update" className='mx-2'/>
                        <img src="/img/delete.png" alt="delete" className='mx-2'/>
                    </div>
                </div>
            </div>
              })}
          {/* <Card2 title={title} description={description} img={img} /> */}
        </div>
      </div>
    </>
  );
}

export default index;

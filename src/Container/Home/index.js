import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaginationnoComponent from "../../Components/Pagination";
import axios from "axios";
import CardMovieComponents from "../../Components/CardMovies";

const HomeContainer = () => {
  const [content, setcontent] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [paginationno, setpaginationno] = useState(0);
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  
  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
    );
    setcontent(data.results);
    setpaginationno(data.total_pages);
    // console.log("data", data);
  };

  useEffect(() => {
    console.log('Trending Component did mount');
    GetDataTrending();
    //eslint-disable-next-line
  }, []);
  
  const handleClick = (number) => {
    setpageno(number);
  };

  useEffect(() => {
    console.log("Trending COmponent did update mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, [pageno]);

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <h1 className="txtCenter">Top Trending</h1>
            <h3 className="txtCenter">Movies and Web-Series For You</h3>
          </Col>
          {content && content.length > 0
            ? content.map((item, index) => {
                return <CardMovieComponents key={index} data={item} />;
              })
            : "Loading....."}
          {paginationno && paginationno > 1 ? (
            <PaginationnoComponent
              maxnum={paginationno}
              activenum={pageno}
              handleClick={handleClick}
            />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;

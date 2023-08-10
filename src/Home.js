import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import "./Home.css";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== "") {
      var url = this.state.url.split("/");
      window.location.href = `/${url[url.length - 1]}`;
    } else {
      var url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${url}`;
    }
  };

  render() {
    const customColor = "#04BFAD";
    return (
      <div className="container2">
        <div style={{ height: "60px" }}></div>
        <div>
          <h1 style={{ fontSize: "55px", color: "#00f5d0" }}>VisionMeet</h1>
          <p style={{ fontWeight: "500", color: "#C1D4D9" }}>
          Click, Connect, Collaborate: Your Next Meeting Starts Here.
          </p>
        </div>

        <div
          style={{
            background: "whitesmoke",
            width: "30%",
            height: "auto",
            padding: "20px",
            minWidth: "400px",
            textAlign: "center",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "25px",
              paddingRight: "18px",
            }}
          >
            Start or Join a Meeting
          </p>
          <Input
            placeholder="Room Name"
            onChange={(e) => this.handleChange(e)}
            style={{marginLeft:"10px"}}
          />
          <Button
            style={{ margin:"20px",backgroundColor: "#027373", color: "whitesmoke" }}
            variant="contained"
            onClick={this.join}
          >
            Go
          </Button>
          </div>
        </div>
    );
  }
}

export default Home;

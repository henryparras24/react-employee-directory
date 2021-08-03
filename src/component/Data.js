import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import API from "../utils/API";

class Data extends Component {
    state = {
      search: "",
      results: [],
      order: "decend",
      filteredResults:[]
    };

    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
      ]

    componentDidMount(){
        API.getRandom()
        .then(res => this.setState({ results: res.results }))
      .catch(err => console.log(err));
    }

    handleInputChange = event => {
        
        const value = event.target.value;
        this.setState({
          search: value
        });
      };

    render(){
        return(
            <div>
                <Search
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <Table results={this.state.results} />
            </div>
        )
    }
}

export default Data;
import React, { Component } from 'react'
import './API.css'


let addedParamCount = 0;

export class API extends Component {



    deleteParams = (element) => {
        element.paramElement.remove();
    }

    submitRes = () => {

        document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";

        let url = document.getElementById("url").value;
        let requestType = document.querySelector("input[name='requestType']:checked").value;
        let contentType = document.querySelector("input[name='contentType']:checked").value;

        let data = {};
        if (contentType == 'params') {
            for (let i = 0; i < addedParamCount + 1; i++) {
                if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                    let key = document.getElementById('parameterKey' + (i + 1)).value;
                    let value = document.getElementById('parameterValue' + (i + 1)).value;
                    data[key] = value;
                }
            }
            data = JSON.stringify(data);
        }
        else {
            data = document.getElementById('requestJsonText').value;
        }


        if (requestType == 'GET') {
            fetch(url, {
                method: 'GET',
            })
                .then(response => response.text())
                .then((text) => {
                    document.getElementById('responsePrism').innerHTML = text;
                });
        }

        else {
            fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.text())
                .then((text) => {
                    document.getElementById('responsePrism').innerHTML = text;
                });

        }
    }



    render() {
        return (
            <>
                <div className="con">

                    <div className="form-group row">
                        <label for="url" className="col-sm-2 col-form-label">URL</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="url" placeholder="Enter URL here" />
                        </div>
                    </div>

                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Request Type</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="requestType" id="get" value="GET" checked />
                                    <label className="form-check-label" for="get">
                                        GET
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="requestType" id="post" value="POST" />
                                    <label className="form-check-label" for="post">
                                        POST
                                    </label>
                                </div>

                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Content Type</legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="contentType" id="jsonRadio" value="json" onClick={() => { this.revParams() }}
                                        checked />
                                    <label className="form-check-label" for="json">
                                        JSON
                                    </label>
                                </div>

                            </div>
                        </div>
                    </fieldset>

                    <div className="my-3" id="requestJsonBox">
                        <div className="form-group row">
                            <label for="requestJsonText" className="col-sm-2 col-form-label">Enter Request Json</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="requestJsonText" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row my-2">
                        <div className="col-sm-10">
                            <button id="submit" className="btn btn-primary" onClick={() => this.submitRes()}>Submit</button>
                        </div>
                    </div>


                    <div className="my-3" id="responseJsonBox">
                        <div className="form-group row">
                            <label for="responseJsonText" className="col-sm-2 col-form-label">Response</label>
                            <div className="col-sm-10">

                                <pre id='responsePre' className="language-javascript"> <code id='responsePrism' className="language-javascript"> Your response will appear here </code> </pre>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default API

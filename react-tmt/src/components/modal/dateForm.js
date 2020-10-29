import React from 'react';
import Button from "react-bootstrap/Button";
import Redirect from "react-router-dom/es/Redirect";
import {Link} from "react-router-dom";


class DateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '2020-02-01',
            end: '2020-10-01'
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEnd(event) {
            this.setState({
                start: this.state.start,
                end: event.target.value
            })
    }

    handleChangeStart(event) {
        this.setState({
            start: event.target.value,
            end: this.state.end
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.start + this.state.end + this.props.linkTo);
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Start Date:
                    <input type="date" value={this.state.start} onChange={this.handleChangeStart} />
                </label>
                <br/>
                <label>
                    End Date:
                    <input type="date" value={this.state.end} onChange={this.handleChangeEnd} />
                </label>
                <br/>

                    <Link to={{
                        pathname: this.props.linkTo,
                        state: this.state
                    }}>
                        <Button>
                            Submit
                        </Button>
                    </Link>
            </form>
        );
    }
}

export default DateForm;
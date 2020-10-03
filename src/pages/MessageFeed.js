import React from "react";
import Menu from "../components/menu/Menu";
import Service from "../services/Service";
import Message from "../components/message/Message";
import PostMessage from "../components/PostMessage";
import GetUsersService from "../services/GetUsersService";
class MessageFeed extends React.Component {
    client = new Service();

    state = {
        message: [],
        text: "",
        users: []
    };

    componentDidMount() {
        this.client.getAllMessages().then((response) => {
            this.setState({ message: response.data.messages });
        });
        new GetUsersService().getUsers().then((response) => {
            this.setState({ users: response.data.users });
            console.log(response.data);
        });


    }

    handleMessagePost = (event) => {
        event.preventDefault();
        this.client.postMessage({ text: this.state.text })
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        message: [result.data.message, ...currentState.message],
                        text: ""
                    }
                })
            });
        console.log("Post Button Pressed");
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        if (this.state.message.length === 0 || this.state.users.length === 0) {
            return (
                <div className="MessageList">
                    <Menu />
                    <h1>MessageList</h1>
                    <h3>LOADING...</h3>
                </div>
            );
        }

        return (
            <div className="MessageList">
                <Menu />
                <h1>Message Feed</h1>
                <PostMessage handleChange={this.handleChange} handleMessagePost={this.handleMessagePost} text={this.state.text} />

                <ul>
                    {this.state.message.map((messageObject) => (
                        <Message key={messageObject.id} {...messageObject} />
                    ))}
                </ul>
                <div>
                    <ul>
                        <h1>Users</h1>
                        {this.state.users.map((userObject) => (
                            <li key={userObject.username}> {userObject.username}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MessageFeed;
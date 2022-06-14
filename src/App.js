import React from "react";
import { connect } from "react-redux";
import NoteDatail from "./NoteDatail";
import NoteList from "./NoteList";
import { fetchPosts } from "./redux/actions/posts";

const App = ({ downloadData }) => {

    React.useEffect(() => {
        downloadData()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Welcome</h1>
            <div>
                <NoteList />
                <NoteDatail />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    downloadData: fetchPosts
}

export default connect(null, mapDispatchToProps)(App);
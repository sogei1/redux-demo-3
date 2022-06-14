import { connect } from "react-redux";

const NoteDetail = ({ post }) => {

    if(!post) {
        return <div>Select your post</div>
    }

    return (
        <div>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
        </div>
    )
}

const mapStateToProps = ({ posts }) => {
    return {
        post: posts.selected
    }
}

export default connect(mapStateToProps)(NoteDetail);
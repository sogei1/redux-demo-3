import { connect } from "react-redux";
import { selectPost } from "./redux/actions/posts";


const NoteItem = ({ title, onPost }) => {
    return (
        <div><button onClick={onPost}>{title}</button></div>
    )
}

const NoteList = ({ posts, selectPost }) => {

    const renderItems = () => {
        if(posts) {

            const handleClick = (post) => {
                if(selectPost) selectPost(post)
            }

            return posts.map((it, index) => {
                return <NoteItem key={index} title={it.title} onPost={() => handleClick(it)} />
            })
        }
    }
 
    return (
        <div>
            {renderItems()}
        </div>
    )
}

const mapStateToProps = (state) => {

    const { posts } = state.posts;
    // const posts = state.posts.posts;
    return {
        posts
    }
}

const mapDispatchToProps = {
    selectPost
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
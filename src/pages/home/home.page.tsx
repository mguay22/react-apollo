import React from 'react';

import PostsGrid from '../../ components/posts/posts-grid/posts-grid.component';
import { useGetPosts } from '../../hooks/posts/useGetPosts';

const Home: React.FC = () => {
    const posts = useGetPosts();

    return (
        <div className="home">
            <PostsGrid posts={posts || []} />
        </div>
    );
}

export default Home;
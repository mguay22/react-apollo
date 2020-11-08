import React from 'react';

import { Post } from '../../../common/interfaces/post.interface';
import PostsGridItem from './posts-grid-item/posts-grid-item.component';

interface PostsGridProps {
    posts: Post[]
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
    return (
        <div className="posts-grid">
            {posts.map(post => (
                <div key={post.id}>
                    <PostsGridItem post={post} />
                </div>
            ))}
        </div>
    );
}

export default PostsGrid;
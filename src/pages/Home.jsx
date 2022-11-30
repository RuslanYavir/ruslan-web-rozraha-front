import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
  const { posts, postStatus, tags, tagStatus } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  const postsLoading = postStatus === 'loading';
  const tagsLoading = tagStatus === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="News" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(postsLoading ? [...Array(5)] : posts).map((obj, index) => (
            <Post
              key={index}
              {...obj}
              user={obj && obj.user}
              commentsCount={3}
              isLoading={postsLoading}
              isEditable={obj && user ? user._id === obj.user._id : false}
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags} isLoading={tagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Elon Musk',
                  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Elon_Musk_%28cropped%29.jpg',
                },
                text: 'The best full-stack app in the world',
              },
              {
                user: {
                  fullName: 'Jeff Bezos',
                  avatarUrl: 'https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg',
                },
                text: 'Best blog',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

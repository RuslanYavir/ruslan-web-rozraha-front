import React from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';
import axios from '../axios';

export const FullPost = () => {
  const [data, setData] = React.useState();
  const { id } = useParams();
  const user = useSelector((state) => state.auth.data);

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        alert('Ошибка при получении статьи');
        console.warn(err);
      });
  }, []);

  return (
    <>
      <Post
        {...data}
        user={data && data.user}
        commentsCount={3}
        isLoading={!data}
        isEditable={data && user?._id === data.user._id}
        isFullPost>
        {data && <ReactMarkdown children={data.text} />}
      </Post>
      {data && (
        <CommentsBlock
          items={[
            {
              user: {
                fullName: 'Elon Musk',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Elon_Musk_%28cropped%29.jpg',
              },
              text: 'New post!!!',
            },
            {
              user: {
                fullName: 'Dev',
                avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
              },
              text: 'Nice',
            },
          ]}
          isLoading={false}>
          <Index />
        </CommentsBlock>
      )}
    </>
  );
};

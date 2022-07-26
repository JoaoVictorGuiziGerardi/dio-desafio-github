import React, { useEffect, useState, memo } from 'react';

// Substitui shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
}

const TwitterHooks = (props) => {

  const { loading } = props;
  const [tweet, setTweet] = useState('tweet');

  // Equivalente de componentDidMount
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts);
    console.log('componentDidMount', loading);
  }, []);

  // Equivalente de componentDivUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  // Equivalente a componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido');
    }
  }, [])

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet atualizado:', tweet)
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      teste
    </div>
  )
}

export default memo(TwitterHooks, areEqual);
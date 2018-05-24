import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);

  const { color } = query;

  return (
    <div>
      <h2 style={{color}}>소개</h2>
      <p>
        안녕하세요, 저는 {match.params.name}입니다.
      </p>
    </div>
  );
};

export default About;

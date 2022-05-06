import React, { useEffect } from 'react';
// @ts-ignore
import newsBg from '../../images/news/MY21_TCR_ADPRO_Disc_banner.jpg';
import Search from '../../components/Search/Search';
import AdminNewsCardBox from './AdminNewsCardBox/AdminNewsCardBox';
import LastJourneys from './LastJourneys/LastJourneys';
// import UserService from '../../API/PostService';

const News = () => {
  // const [root, setRoot] = useState(null);
  // const getAnswer = async () => {
  //   const pipi2 = await UserService.root();
  //   setRoot(pipi2.data);
  // };

  useEffect(() => {
    // getAnswer();
  }, []);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${newsBg})` }}
        className="news">
        <div className="container__wrapper news">
          <Search/>
        </div>
      </div>
      <div className="news__messages">
        <AdminNewsCardBox />
      </div>
      <div className="news__last-journeys">
        <LastJourneys />
      </div>

    </div>

  );
};

export default News;

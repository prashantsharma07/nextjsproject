
import { GetServerSideProps } from 'next';
import axios from 'axios';
import HomeTemplate from '../components/templates/HomeTemplate';

interface HomeProps {
  cards: { title: string; subtitle: string; details: string }[];
}

const Home: React.FC<HomeProps> = ({ cards }) => {
  return <HomeTemplate cards={cards} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: cards } = await axios.get('http://localhost:3000/api/cards');
  return {
    props: {
      cards,
    },
  };
};

export default Home;
            
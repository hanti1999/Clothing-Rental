import ClothingList from '@/components/ClothingList';
import ClothingOverview from '@/components/ClothingOverview';
import { sampleClothing } from '@/constants';

const Home = () => (
  <>
    <ClothingOverview {...sampleClothing[0]} />

    <ClothingList
      title='Sản phẩm mới nhất!'
      clothing={sampleClothing}
      contaiderClassName='mt-28'
    />
  </>
);

export default Home;

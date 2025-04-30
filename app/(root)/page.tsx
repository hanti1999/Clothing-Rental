import ClothingOverview from '@/components/ClothingOverview';
import ClothingList from '@/components/ClothingList';
import { sampleClothing } from '@/constants';

const Home = () => (
  <>
    <ClothingOverview {...sampleClothing[0]} />

    <ClothingList
      title='Sản phẩm mới nhất!'
      clothing={sampleClothing}
      containerClassName='mt-28'
    />
  </>
);

export default Home;

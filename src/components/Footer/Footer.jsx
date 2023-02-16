import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Box, Link, Img, Img2 } from './Footer.styled';
import img1 from '../../img/footer-img1.svg';
import img2 from '../../img/footer-img2.svg';

export default function Footer() {
  return (
    <Box>
      <Img src={img1} alt="smile" />
      <Link href="#" target="_blank">
        <FaLinkedinIn />
      </Link>

      <Link href="#" target="_blank">
        <AiOutlineTwitter />
      </Link>

      <Link href="#" target="_blank">
        <FaFacebookF />
      </Link>

      <Link href="#" target="_blank">
        <FaPinterestP />
      </Link>
      <Img2 src={img2} alt="smile" />
    </Box>
  );
}

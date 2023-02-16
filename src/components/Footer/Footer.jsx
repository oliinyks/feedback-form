import { FaLinkedinIn, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Box, Link } from './Footer.styled';

export default function Footer() { 
	return (
    <Box>
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
    </Box>
  );
}
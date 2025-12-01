import { AiOutlineDownload } from "react-icons/ai";
import resume from '../assets/pdf/resume.pdf'

const Resume = () => {
  return (
    <div className='resume rounded-2xl flex flex-col justify-between h-full'>
      <h1 className='text-2xl'>Let's Talk</h1>
      <div className='resumeBtns flex gap-4 '><button>Get In Touch</button> <a href={resume} download className="flex items-center gap-2">
  Resume 
  <AiOutlineDownload className="text-lg" />
</a></div>
    </div>
  )
}

export default Resume

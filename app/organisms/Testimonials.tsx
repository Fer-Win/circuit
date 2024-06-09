import React from 'react'
import SectionHeading from '../molecules/SectionHeading'
import TestimonialCarousel from '../molecules/TestimonialCarousel'
import { TestimonialProps } from '../atoms/Testimonial';
const testimonials1: TestimonialProps[] = [
  {
      content: "Circuit has completely changed the way I approach software development. The resources and community support are unparalleled.",
      name: "Sarah L.",
      job: "Full-Stack Developer"
  },
  {
      content: "Being part of Circuit has allowed me to collaborate on projects I never thought possible. It's a game-changer for any developer.",
      name: "Mark T.",
      job: "Software Engineer"
  },
  {
      content: "The learning hub is fantastic. I've picked up new skills and applied them in real-world projects thanks to Circuit.",
      name: "Jane D.",
      job: "Front-End Developer"
  },
  {
      content: "The collaborative projects on Circuit have helped me enhance my coding skills and work with developers from all over the world.",
      name: "Alex P.",
      job: "Backend Developer"
  },
  {
      content: "Circuit's community support is amazing. Whenever I have a question or need feedback, there's always someone willing to help.",
      name: "Emily R.",
      job: "Mobile App Developer"
  },
  {
      content: "Thanks to Circuit, I have been able to keep up with the latest trends and technologies in the software development world.",
      name: "John K.",
      job: "DevOps Engineer"
  },
  {
      content: "The virtual events hosted by Circuit are informative and engaging. I've learned so much from the expert talks and webinars.",
      name: "Lisa M.",
      job: "Data Scientist"
  },
  {
      content: "Circuit's platform is a treasure trove of knowledge. The tutorials and courses have been instrumental in my professional growth.",
      name: "Michael B.",
      job: "Machine Learning Engineer"
  },
  {
      content: "I love how Circuit fosters a sense of community among developers. The forums and chat rooms are great for networking and learning.",
      name: "Rachel W.",
      job: "UI/UX Designer"
  },
  {
      content: "Circuit's annual conference is a highlight of my year. The workshops and keynote speeches are top-notch and incredibly inspiring.",
      name: "David S.",
      job: "Tech Lead"
  }
];
const testimonials2: TestimonialProps[] = [
  {
      content: "Circuit has opened up a world of opportunities for me. The networking and project collaboration features are outstanding.",
      name: "Nina P.",
      job: "Software Architect"
  },
  {
      content: "I've significantly improved my coding skills thanks to the tutorials and resources available on Circuit.",
      name: "Carlos G.",
      job: "Frontend Developer"
  },
  {
      content: "The support from the Circuit community is incredible. It's like having a team of experts at your fingertips.",
      name: "Amir H.",
      job: "Backend Developer"
  },
  {
      content: "Circuit's events are not to be missed. The insights and knowledge shared by industry leaders are invaluable.",
      name: "Sophia K.",
      job: "Product Manager"
  },
  {
      content: "The variety of courses on Circuit has helped me stay current with emerging technologies and best practices.",
      name: "Oliver J.",
      job: "Data Analyst"
  },
  {
      content: "Collaborating on open-source projects through Circuit has been a fantastic experience. It's helped me grow professionally.",
      name: "Emma L.",
      job: "Cloud Engineer"
  },
  {
      content: "I love the diversity of the Circuit community. It's a great place to learn from developers with different backgrounds and expertise.",
      name: "Lucas M.",
      job: "Cybersecurity Specialist"
  },
  {
      content: "The mentoring program on Circuit has been incredibly beneficial. I've received invaluable guidance and advice.",
      name: "Ava R.",
      job: "AI Researcher"
  },
  {
      content: "Circuit's platform is user-friendly and packed with features that make learning and collaboration seamless.",
      name: "Ethan B.",
      job: "Full-Stack Developer"
  },
  {
      content: "Being part of Circuit has boosted my career. The knowledge and connections I've gained here are unmatched.",
      name: "Mia T.",
      job: "Blockchain Developer"
  }
];


const Testimonials = () => {
  return (
    <div className='flex mb-8 md:my-32 flex-col justify-start items-center gap-16 h-[80vh] mt-16 md:mt-0  md:h-fit'>
      <SectionHeading title={'Developers love it here'} subtitle={'Hear what our fellow developers say about Circuit'} />
      <div className=' w-full h-[70vh] flex flex-col gap-16'>
      
        <TestimonialCarousel testimonials={testimonials1} direction={'left'}/>
        <TestimonialCarousel testimonials={testimonials2} direction={'right'}/>

      </div>
    </div>
  )
}

export default Testimonials
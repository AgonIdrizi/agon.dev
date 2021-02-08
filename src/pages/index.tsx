import { useRef} from "react";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import BlogPost from "../components/BlogPost";


export default function Home() {
  
  
  
  const aboutDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const contanctDivRef = useRef(null);


  return (
    <Container refs={{ aboutDivRef, projectsDivRef, contanctDivRef}}>
      
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16  justify-center">
        <section ref={aboutDivRef} className="about-section flex flex-col mx-5  justify-center place-items-start">
          <h2 className="text-primary font-bold text-3xl md:text-5xl my-2 justify-start">Hi, I'm Agon!</h2>
          <div className="text-primary  sm:max-w-2xl">
            <h2 className="text-gray-600 leading-6 text-sm md:text-base lg:text-lg  dark:text-gray-200  break-all">
              I'm a front end developer, building websites with React and Typescript. Sometimes i write blogs and capture beauty of the world with my fuji camera!
            </h2>
          </div>
        </section>
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 mx-5 my-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl md:text-4xl mb-6 font-bold justify-center">Projects</h2>
          <div className="projects-content ">
            <ProjectCard 
              title="My Dinner" 
              description="Online food delivery service for local fast foods built with React.js" 
              slug="agon-test" 
              icon="" />
            <ProjectCard title="Where's Waldo" description="" slug="" icon="" />
            <ProjectCard title="Fast replies" description="" slug="" icon="" />
          </div>
        </section>
        <section className="projects-section flex flex-col w-500 mx-5  pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl md:text-4xl mb-6 font-bold justify-center">Blogs</h2>
          <BlogPost 
            title="The most important thing about Context Api"
            summary="In this blog post I'm describing how default re-rendering of context-api works, and how we can optimize to not re-render if it's value never changes!" 
            slug="context-api-rerendering"
          />
          
        </section >
        <section ref={contanctDivRef} className="projects-section flex flex-col w-500  mx-5 mt-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl font-bold justify-center">Contact</h2>
          <div className="contacts-content text-sm md:text-base lg:text-base text-primary">
            Reach me through my email: agon@agon.com
          </div>
        </section>
      </div>
        <ScrollToTop />
    </Container>
  );
}

'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list, hobby } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is devbaoo, a student at{' '}
            <Link
              href="https://daihoc.fpt.edu.vn/"
              target="_blank"
              className="text-accent"
            >
              FPT University
            </Link>
            <br />
          </p>
          <p>
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </p>
          <p>
            My field of Interest's are building new Web Technologies and Products and also in areas related to WebApp or Software.
          </p>
          {hobby && (
            <>
              <p>{hobby.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {hobby.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
          <p>
            My main focus these days is learning FullStack development and finding a decent job.
          </p>
          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
          <AuthorImage src={img} alt={author.name} />
          <div className="mt-6 w-full">
            <p className="italic whitespace-nowrap">"The best way to predict the future is to create it!"</p>
            <p className="text-right font-bold">- DevBaoo</p>
          </div>
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;

"use client";

import gsap from "gsap";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Blog } from "@/type/general";
import { useProjectBg } from "@/lib/zustand";

import Wrapper from "@/components/wrapper";
import Button from "@/components/button";
import BlogExcerpt from "@/components/excerpts/blog-excerpt";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Blogs = ({
  blogs,
  hideTitle,
}: {
  blogs: Blog[];
  hideTitle?: boolean;
}) => {
  const projectBg = useProjectBg();

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current!(x);
    yMoveContainer.current!(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      ref={container}
      className={cn(
        "relative flex flex-col w-full h-full z-[2]",
        !hideTitle && "bg-background"
      )}
    >
      <div
        className={cn(
          "hero-wrapper flex flex-col w-full h-full py-20",
          projectBg
        )}
      >
        <Wrapper
          onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
          }}
          className={cn("flex flex-col gap-16", hideTitle && "md:px-0 px-0")}
        >
          {!hideTitle && <h1 className="text-2xl font-bold py-2">Blogs</h1>}
          <div className="flex flex-col">
            {blogs.map((blog, index) => (
              <BlogExcerpt
                key={blog.slug}
                blog={{ ...blog, index }}
                manageModal={manageModal}
              />
            ))}
          </div>
          {!hideTitle && (
            <Button
              asLink
              href="/blog"
              name="More Blogs"
              className="px-6 py-2 self-start text-xl capitalize font-semibold rounded-full text-primary-muted"
            />
          )}
        </Wrapper>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="fixed w-[250px] h-[200px] rounded-lg top-[50%] left-[50%] z-[3] pointer-events-none overflow-hidden"
        >
          <div
            style={{ top: index * -100 + "%" }}
            className="relative w-full h-full blog-img-slider"
          >
            {blogs.map((blog, index) => {
              const { metadata } = blog;
              if (!metadata.image) return null;
              return (
                <div
                  className="w-full h-full flex justify-center items-center"
                  key={`modal_${index}`}
                >
                  <Image
                    src={metadata.image}
                    width={250}
                    height={0}
                    alt="image"
                    className="object-cover w-auto h-full"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div style={{ height }} className="blogs-overlay" />
      </div>
    </section>
  );
};

export default Blogs;

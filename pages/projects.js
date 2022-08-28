import Head from "next/head";
import Layout from "../components/layouts/Layout";

export default function Projects({ repos }) {
  const finds = repos.filter((repo) => repo.homepage);
  const projectViews = finds.map((find, i) => {
    let event = new Date(find.pushed_at);
    event = event.toDateString().split(" ");
    event = event[2] + " " + event[1] + " " + event[3];
    return (
      <div className="w-full md:w-1/2 xl:w-1/3 p-3" key={i}>
        <a className="group" href={find.homepage}>
          <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
            <img
              className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                <div className="font-heading font-semibold text-lg text-white group-hover:opacity-80 uppercase">
                  {find.name}
                </div>
                <div className="mb-2 font-heading font-medium text-xs text-gray-400 tracking-px">
                  From GitHub - Last update at {event}
                </div>
                <div className="text-gray-400 text-xs">
                  {find.description
                    ? find.description
                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, qui."}
                </div>

                <div className="pt-4 pb-2">
                  {find.topics.map((topic) => {
                    return (
                      <span
                        key={topic}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {topic}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  });
  return (
    <Layout title="Projects - Andhika Pramana Putra">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col py-8 overflow-y-visible h-auto">
        <div className="md:max-w-lg mx-auto text-center mb-20">
          <h2 className="mb-4 font-heading font-semibold text-black dark:text-inherit text-6xl sm:text-7xl">
            Latest projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-inherit">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div className="flex flex-wrap -m-3">{projectViews}</div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/vbuxx/repos");
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
}

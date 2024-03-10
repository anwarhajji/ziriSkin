import Head from "next/head";
import { PropTypes } from 'prop-types';
import { AnimatedText, ArticleCard, Layout, TransitionPageEffect } from "../../components";
import { articles } from "../../lib/articlesData";


export default function Blog({ summary }) {
    return (
        <>
            <Head>
                <title>ziri</title>
                     </Head>
            <TransitionPageEffect />
            <main className="flex w-full items-center justify-center" >
                <Layout className="w-full max-w-[1920px] mx-auto h-full bg-light dark:bg-dark inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">
                    <AnimatedText text="Ginger: Najnowsze informacje i porady"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                    <ul className="grid grid-cols-3 gap-16 mb-16 md:grid-cols-1 2xl:grid-cols-2">
                        {articles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                title={article.title}
                                subtitle={article.subtitle}
                                image={article.imgURL}
                                summary={summary}
                                time={article.time}
                                link={`/blog/${article.slug}`}
                            />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    )
}

Blog.propTypes = {
    summary: PropTypes.string,
};

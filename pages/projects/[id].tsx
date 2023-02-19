import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from "querystring";
import styled from 'styled-components';
import Projects from '../../src/content/Projects.json';

interface Props {
    host: string;
    key: string
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
    const projectId = context?.params?.id;
    const projects = Projects.filter(project => project.url.toString() === projectId)
    return {
        props: {
            project: projects[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = Projects.map(project => ({
        params: { id: project.url }
    }))

    return { paths, fallback: false }
}


export default ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // name: String,
    // description: String,
    // image: String,
    // tags: String,
    // link: String,
    // sourceCode: String,
    // study: {
    //     heading: String,
    //     subHeading: String,
    //     coverImage: String,
    //     about: String,
    //     process: String,
    //     media: []
    // }

    return <>
        <Head>
            <title> Tesfa Demissie | {project.name}</title>
        </Head>
        <Container id="showcase">
        </Container>
    </>
}

export const Container = styled.div`
    
`
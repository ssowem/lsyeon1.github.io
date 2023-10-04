export default async function Read (props) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`,{cache:'no-store'});
    const topic = await resp.json();
    

    return (
        <>
        <p>상세시작</p>
        <h2>{topic.title}</h2>
        {topic.body}
        <p>상세 끝</p>
        </>
    )
}
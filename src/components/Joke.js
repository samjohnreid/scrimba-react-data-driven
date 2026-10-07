export default function Joke(props) {
    return (
        <>
            <dl>
                {props.setup && <dt>{props.setup}</dt>}
                <dd>{props.punchline}</dd>
            </dl>
        </>
    );
}
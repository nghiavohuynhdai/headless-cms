export default function handleData(inputData) {
  const outputData = inputData.map((block) => {
    if (block.name == "core/group" || block.name == "core/columns") {
      console.log("Hi")
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: block.saveContent,
          }}
        ></div>
      );
    } else if (block.name == "core/image") {
      return <img src={block.attributes.url} alt={block.attributes.alt} />;
    }
  });
  return outputData;
}

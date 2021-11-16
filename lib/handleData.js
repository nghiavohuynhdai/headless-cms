export default function handleData(inputData) {
  const outputData = inputData.map((block) => {
    if (block.name == "core/group") {
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

export default function ArticleContent({ content = [] }) {
  return (
    <div className="text-[17px] md:text-[18px] leading-[1.9] text-[#171717]/80 dark:text-[#f5f2ea]/80">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="mb-8"
              >
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={index}
                className="
                  heading-font
                  text-3xl
                  md:text-4xl
                  leading-tight
                  text-[#171717]
                  dark:text-[#f5f2ea]
                  mt-16
                  mb-7
                "
              >
                {block.text}
              </h2>
            );

          case "list":
            return (
              <ol
                key={index}
                className="
                  list-decimal
                  pl-7
                  mb-10
                  space-y-5
                  marker:text-[#b7791f]
                  marker:font-semibold
                "
              >
                {(block.items || block.text || []).map(
                  (item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="pl-2"
                    >
                      {item}
                    </li>
                  )
                )}
              </ol>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="
                  my-14
                  border-l-2
                  border-[#b7791f]
                  pl-6
                  md:pl-8
                  py-2
                  heading-font
                  text-2xl
                  md:text-3xl
                  italic
                  leading-relaxed
                  text-[#171717]
                  dark:text-[#f5f2ea]
                "
              >
                “{block.text}”
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

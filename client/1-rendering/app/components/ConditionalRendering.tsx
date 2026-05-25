"use client";

export const ConditionalRendering = () => {
  const age = 46;

  // 1.
  //   if (age < 46) {
  //     return <>Dagens ungdom</>;
  //   } else {
  //     return <>De vise människorna</>;
  //   }

  // 2.
  //   let html = <>Dagens ungdom</>;

  //   if (age > 46) {
  //     html = <>De vise</>;
  //   }

  //   return html;

  // 3.
  //   const html = age < 46 ? <>Dagens ungdom</> : <>De vise</>;

  //   return html;

  // 4.
  return <>{age < 46 ? <>Dagens ungdom</> : <>De vise</>}</>;
};

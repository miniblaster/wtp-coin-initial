"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Page() {
  const [flag] = useState(false);
  return (
    <div
      className={classNames("font-bold", flag ? "text-[red]" : "text-[blue]")}
    >
      hello
    </div>
  );
}

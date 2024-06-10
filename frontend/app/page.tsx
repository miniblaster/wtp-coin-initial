"use client";
import { useEffect, useState, useRef } from "react";

const Counter = () => {
  const effectRan = useRef(false);
  useEffect(() => {
    if (!effectRan.current) {
      console.log("effect applied - only on the FIRST mount");
    }

    return () => {
      effectRan.current = true;
    };
  }, []);
};

export default Counter;

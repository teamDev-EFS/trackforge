import { renderHook, act } from "@testing-library/react";
import { useTimer } from "../../hooks/useTimer";

test("should initialize timer", () => {
  const { result } = renderHook(() => useTimer(60));
  expect(result.current.seconds).toBe(60);
  expect(result.current.isActive).toBe(false);
});

test("should start timer", () => {
  const { result } = renderHook(() => useTimer(60));
  act(() => {
    result.current.start();
  });
  expect(result.current.isActive).toBe(true);
});

test("should pause timer", () => {
  const { result } = renderHook(() => useTimer(60));
  act(() => {
    result.current.start();
  });
  act(() => {
    result.current.pause();
  });
  expect(result.current.isActive).toBe(false);
});

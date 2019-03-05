import { Button } from "../button.enum";
import { Key } from "../key.enum";
import { Point } from "../point.class";
import { ClipboardAction } from "../provider/native/clipboardy-clipboard-action.class";
import { KeyboardAction } from "../provider/native/robotjs-keyboard-action.class";
import { MouseAction } from "../provider/native/robotjs-mouse-action.class";
import { NativeAdapter } from "./native.adapter.class";

jest.mock("../provider/native/clipboardy-clipboard-action.class");
jest.mock("../provider/native/robotjs-mouse-action.class");
jest.mock("../provider/native/robotjs-keyboard-action.class");

describe("NativeAdapter class", () => {
  it("should delegate calls to setMouseDelay", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const delay = 5;

    // WHEN
    SUT.setMouseDelay(delay);

    // THEN
    expect(mouseMock.setMouseDelay).toBeCalledTimes(1);
    expect(mouseMock.setMouseDelay).toBeCalledWith(delay);
  });

  it("should delegate calls to setMousePosition", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const newPosition = new Point(10, 10);

    // WHEN
    SUT.setMousePosition(newPosition);

    // THEN
    expect(mouseMock.setMousePosition).toBeCalledTimes(1);
    expect(mouseMock.setMousePosition).toBeCalledWith(newPosition);
  });

  it("should delegate calls to currentMousePosition", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);

    // WHEN
    SUT.currentMousePosition();

    // THEN
    expect(mouseMock.currentMousePosition).toBeCalledTimes(1);
  });

  it("should delegate calls to leftClick", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);

    // WHEN
    SUT.leftClick();

    // THEN
    expect(mouseMock.leftClick).toBeCalledTimes(1);
  });

  it("should delegate calls to rightClick", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);

    // WHEN
    SUT.rightClick();

    // THEN
    expect(mouseMock.rightClick).toBeCalledTimes(1);
  });

  it("should delegate calls to middleClick", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);

    // WHEN
    SUT.middleClick();

    // THEN
    expect(mouseMock.middleClick).toBeCalledTimes(1);
  });

  it("should delegate calls to pressButton", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const buttonToPress = Button.LEFT;

    // WHEN
    SUT.pressButton(buttonToPress);

    // THEN
    expect(mouseMock.pressButton).toBeCalledTimes(1);
    expect(mouseMock.pressButton).toBeCalledWith(buttonToPress);
  });

  it("should delegate calls to releaseButton", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const buttonToRelease = Button.LEFT;

    // WHEN
    SUT.releaseButton(buttonToRelease);

    // THEN
    expect(mouseMock.releaseButton).toBeCalledTimes(1);
    expect(mouseMock.releaseButton).toBeCalledWith(buttonToRelease);
  });

  it("should delegate calls to pressKey", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const keyToPress = Key.A;

    // WHEN
    SUT.pressKey(keyToPress);

    // THEN
    expect(keyboardMock.pressKey).toBeCalledTimes(1);
    expect(keyboardMock.pressKey).toBeCalledWith(keyToPress);
  });

  it("should delegate calls to releaseButton", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const keyToRelease = Key.A;

    // WHEN
    SUT.releaseKey(keyToRelease);

    // THEN
    expect(keyboardMock.releaseKey).toBeCalledTimes(1);
    expect(keyboardMock.releaseKey).toBeCalledWith(keyToRelease);
  });

  it("should delegate calls to click", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const keyToClick = Key.A;

    // WHEN
    SUT.click(keyToClick);

    // THEN
    expect(keyboardMock.click).toBeCalledTimes(1);
    expect(keyboardMock.click).toBeCalledWith(keyToClick);
  });

  it("should delegate calls to type", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const stringToType = "testString";

    // WHEN
    SUT.type(stringToType);

    // THEN
    expect(keyboardMock.type).toBeCalledTimes(1);
    expect(keyboardMock.type).toBeCalledWith(stringToType);
  });

  it("should delegate calls to copy", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);
    const stringToCopy = "testString";

    // WHEN
    SUT.copy(stringToCopy);

    // THEN
    expect(clipboardMock.copy).toBeCalledTimes(1);
    expect(clipboardMock.copy).toBeCalledWith(stringToCopy);
  });

  it("should delegate calls to paste", () => {
    // GIVEN
    const clipboardMock = new ClipboardAction();
    const keyboardMock = new KeyboardAction();
    const mouseMock = new MouseAction();
    const SUT = new NativeAdapter(clipboardMock, keyboardMock, mouseMock);

    // WHEN
    SUT.paste();

    // THEN
    expect(clipboardMock.paste).toBeCalledTimes(1);
  });
});

//File chứa tất cả fixture import vào, xong đó đặt biến rồi export 1 lần duy nhất là xài đc
// Code sẽ gọn hơn

import { testFixture } from "../fixture/demo-fixture";
import { fixture1 } from "../fixture/demo-fixture1";
import { mergeTests } from "@playwright/test";

export const test = mergeTests(testFixture, fixture1);
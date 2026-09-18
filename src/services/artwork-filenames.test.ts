import assert from "node:assert/strict";
import { test } from "node:test";
import { artRemoteFileNames } from "./artwork-filenames";

test("classic types keep a single remote filename", () => {
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "COV"), [
    "SLUS_208.51_COV.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "ICO"), [
    "SLUS_208.51_ICO.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "LAB"), [
    "SLUS_208.51_LAB.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "LGO"), [
    "SLUS_208.51_LGO.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "COV2"), [
    "SLUS_208.51_COV2.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "COV3"), [
    "SLUS_208.51_COV3.png",
  ]);
});

test("SCR falls back to indexed SCR_00 used by the art database", () => {
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "SCR"), [
    "SLUS_208.51_SCR.png",
    "SLUS_208.51_SCR_00.png",
  ]);
});

test("SCR2 falls back to indexed SCR_01", () => {
  assert.deepEqual(artRemoteFileNames("SLUS_212.69", "SCR2"), [
    "SLUS_212.69_SCR2.png",
    "SLUS_212.69_SCR_01.png",
  ]);
});

test("SCR3 falls back to indexed SCR_02", () => {
  assert.deepEqual(artRemoteFileNames("SCUS_974.72", "SCR3"), [
    "SCUS_974.72_SCR3.png",
    "SCUS_974.72_SCR_02.png",
  ]);
});

test("BG falls back to indexed BG_00", () => {
  assert.deepEqual(artRemoteFileNames("SLUS_204.86", "BG"), [
    "SLUS_204.86_BG.png",
    "SLUS_204.86_BG_00.png",
  ]);
});

test("already-indexed types are not remapped again", () => {
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "SCR_00"), [
    "SLUS_208.51_SCR_00.png",
  ]);
  assert.deepEqual(artRemoteFileNames("SLUS_208.51", "BG_00"), [
    "SLUS_208.51_BG_00.png",
  ]);
});

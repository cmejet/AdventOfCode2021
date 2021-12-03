import { sampleCommandDayTwo } from "./daytwo.inputs";
interface command {
  direction: string;
  value: number;
}

const output = (commands: command[]): number => {
  let horizontal = 0;
  let depth = 0;

  commands.forEach((command) => {
    switch (command.direction) {
      case "forward":
        horizontal = horizontal + command.value;
        break;
      case "down":
        depth = depth + command.value;
        break;
      case "up":
        depth = depth - command.value;
    }
  });

  return horizontal * depth;
};

const updatedCalcWithAim = (commands: command[]): number => {
  let horizontal = 0;
  let depth = 0; //increases when you move forward by a multiplier of aim
  let aim = 0;

  commands.forEach((command) => {
    switch (command.direction) {
      case "forward":
        horizontal = horizontal + command.value;
        depth = depth + command.value * aim;
        break;
      case "down":
        aim = aim + command.value;
        break;
      case "up":
        aim = aim - command.value;
        break;
    }
  });

  return horizontal * depth;
};

describe("daytwo", () => {
  it("should return example answer", () => {
    const exampleCommands = [
      { direction: "forward", value: 5 },
      { direction: "down", value: 5 },
      { direction: "forward", value: 8 },
      { direction: "up", value: 3 },
      { direction: "down", value: 8 },
      { direction: "forward", value: 2 },
    ];

    expect(output(exampleCommands)).toBe(150);
  });

  it("should return example answer", () => {
    const exampleCommands = [
      { direction: "forward", value: 5 },
      { direction: "down", value: 5 },
      { direction: "forward", value: 8 },
      { direction: "up", value: 3 },
      { direction: "down", value: 8 },
      { direction: "forward", value: 2 },
    ];

    expect(updatedCalcWithAim(exampleCommands)).toBe(900);
  });

  it("should calculate actual data", () => {
    expect(output(sampleCommandDayTwo)).toBe(1250395);
  });

  it("should solve part 2 with actual data", () => {
    expect(updatedCalcWithAim(sampleCommandDayTwo)).toBe(1451210346);
  });
});

function echoCommand(args: string) {
	return args;
}

type registryType = { [key: string]: (args: string) => string };

const registry: registryType = {
	echo: echoCommand
};

export function handle(input: string) {
	const [commandName, argsString] = input.split(' ', 2);

	const command = registry[commandName];
	if (command !== undefined) {
		return command(argsString);
	} else {
		return `command not found: ${commandName}`;
	}
}

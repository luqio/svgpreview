// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {readFileSync} from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	const message = 'Congratulations, your extension "svg-viewer" is now active!';
	console.log(message);

	const openWebview = (content: string) => {
		const panel = vscode.window.createWebviewPanel('SVGPreview', 'SVG Preview', vscode.ViewColumn.One, {})
	    panel.webview.html = `<!DOCTYPE html>
		<html lang='en'>
		<head>
		 <meta name='viewport' content="width=device-width, initial-scale=1.0" >
		</head>
		<body>
		  ${content}
		</body>
		</html>`;
	};
	const getActiveTextUrl = (): string => {
		let url = '';
		const editor = vscode.window.activeTextEditor;
		if(editor){
			url = editor.document.fileName;
		}
		return url;
	};

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('svg-viewer.previewsvg', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const url = getActiveTextUrl();
		const content = readFileSync(url, 'utf-8');
		openWebview(content);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}


interface ICC {
	readonly a: {[a:string]:string}
}

const aa: ICC = {a:{b: 'wq'}};

aa.a.cc = 'rr';
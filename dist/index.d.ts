declare type Params = {
    thousand: string;
    billion: string;
};
declare type ReturnType = Array<(string | null)>;
declare const useNumberToLetter: ({ thousand, billion }?: Params) => (str: string, suffix: string) => ReturnType;
export default useNumberToLetter;

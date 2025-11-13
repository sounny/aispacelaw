export interface GapTopic {
    title: string;
    details: string;
    imagePrompt: string;
}

export interface Solution {
    title: string;
    description: string;
}

export interface PosterContent {
    gapTopics: GapTopic[];
    solutions: Solution[];
}

export interface Problem {
    title: string;
    description: string;
}

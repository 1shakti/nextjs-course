import { buildFeedbackPath, extractFeedback } from ".";

export default function handler(req, res) {
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const feedbackData = extractFeedback(filePath);
	const selectedFeedback = feedbackData.find(
		(feedback) => feedbackId === feedback.id
	);
	res.status(200).json({ message: "Success", feedback: selectedFeedback });
}

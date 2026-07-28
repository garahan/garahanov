---
title: "Quantitative Methods for Policy Analysis: A Practical Overview"
date: "2025-01-15"
location: "Waseda University"
category: "research"
tags: ["econometrics", "python", "stata", "policy-science", "data-analysis"]
excerpt: "An overview of the quantitative toolkit I use for policy prediction — from regression to machine learning, with practical examples in Python and Stata."
---

Policy analysis without data is just opinion. In this post, I want to share the quantitative methods I rely on in my research at Waseda University, and explain why each one matters.

## The Foundation: Ordinary Least Squares (OLS)

Everything starts with OLS regression. It's the workhorse of econometrics — simple, interpretable, and surprisingly powerful when used correctly.

The key assumptions are linearity, independence, homoscedasticity, and normality of residuals. Violations of these assumptions don't necessarily make OLS useless, but they do require corrections: robust standard errors, clustering, or transformations.

## Beyond OLS: Panel Data Methods

Most policy questions involve data that varies across both units and time. Panel data methods — fixed effects, random effects, and difference-in-differences — allow us to control for unobserved heterogeneity and identify causal effects.

My thesis work relies heavily on fixed effects models, which control for time-invariant characteristics of the units being studied.

## Machine Learning for Variable Selection

Traditional econometrics assumes you know which variables matter. In practice, with large-scale administrative data, you often have hundreds of potential predictors. This is where machine learning comes in.

I use LASSO and random forests for variable selection — not as the final model, but as a screening step to identify which variables deserve closer examination in a traditional econometric framework.

## The Tools: Python and Stata

I use both Python and Stata, and they complement each other well:

- **Stata** for traditional econometric estimation — it has the most robust implementation of panel data methods and diagnostic tests.
- **Python** for data wrangling, machine learning, and visualization — pandas, scikit-learn, and matplotlib form my daily toolkit.

The key insight is that no single tool is sufficient. The best analysts move fluidly between tools, using each for what it does best.
